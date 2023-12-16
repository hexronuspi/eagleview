import os
import matplotlib.pyplot as plt
from PIL import Image
import math
import random
import pandas as pd

class ImageMatrix:
    def __init__(self, folder_path=None, file_path=None, figsize=(10, 10), axis='off'):
        self.folder_path = folder_path
        self.file_path = file_path
        self.figsize = figsize
        self.axis = axis
        self.random = False
        self.grid_dimensions = (0, 0)

        if file_path is not None:
            self.df = pd.read_csv(self.file_path)
        else:
            self.df = pd.DataFrame()  

    def rand(self, grid_dimensions):
        self.random = True
        self.grid_dimensions = grid_dimensions
        return self

    def display_image(self, check_col='Image_Name', display_label=False, display_cols=None, display_name=False, print_all=True, x=0, y=0, fig_size=None, fontsize=10, text_color='white', label_background_color='black'):
        if self.folder_path is None:
            print("Folder path not provided. Please specify a folder path.")
            return

        num_columns = self.grid_dimensions[1]
        images = os.listdir(self.folder_path)
        num_images = len(images)
        num_rows = math.ceil(num_images / num_columns) if print_all else self.grid_dimensions[0]

        if self.random:
            images = random.sample(images, min(num_rows * num_columns, num_images))

        if fig_size is None:
            fig_size = self.figsize  

        fig_width, fig_height = fig_size
        max_img_width, max_img_height = 0, 0

        for img_name in images:
            img = Image.open(os.path.join(self.folder_path, img_name))
            max_img_width = max(max_img_width, img.width)
            max_img_height = max(max_img_height, img.height)

        reduced_width = fig_width * 0.75
        reduced_height = fig_height * 0.75

        fig, axs = plt.subplots(num_rows, num_columns, figsize=(reduced_width, reduced_height))
        fig.patch.set_facecolor('white') 

        for i in range(num_rows):
            for j in range(num_columns):
                index = i * num_columns + j
                if index < len(images):
                    img = Image.open(os.path.join(self.folder_path, images[index]))
                    img = img.resize((max_img_width, max_img_height))
                    axs[i, j].imshow(img)
                    axs[i, j].axis(self.axis)
                    image_name = images[index].split('.')[0]
                    if not self.df.empty:
                        row = self.df[self.df[check_col] == image_name]
                        if not row.empty:
                            labels = ""
                            if display_cols:
                                display_cols = [col for col in display_cols if col in self.df.columns]
                                labels = ', '.join([f"{col}: {str(row[col].values[0])}" for col in display_cols])

                            if display_label and labels:
                                if display_name:
                                    labels = f"{image_name}\n{labels}"
                                axs[i, j].text(x, y, labels, color=text_color, backgroundcolor=label_background_color, va='bottom', fontsize=fontsize) 
                else:
                    axs[i, j].axis('off')

        plt.tight_layout()
        plt.show()
