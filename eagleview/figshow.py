import os
import matplotlib.pyplot as plt
from PIL import Image
import math

class ImageMatrix:
    def __init__(self, folder_path, default_figsize=(10, 10), default_axis='off'):
        self.folder_path = folder_path
        self.default_figsize = default_figsize
        self.default_axis = default_axis

    def display_image(self, grid_dimensions, figsize=None, axis=None, print_all=True):
        figsize = figsize if figsize else self.default_figsize
        axis = axis if axis else self.default_axis

        num_columns = grid_dimensions[1]
        images = os.listdir(self.folder_path)
        num_images = len(images)
        num_rows = math.ceil(num_images / num_columns) if print_all else grid_dimensions[0]

        fig, axs = plt.subplots(num_rows, num_columns, figsize=(figsize[0]*num_columns, figsize[1]*num_rows)) 
        for i in range(num_rows):
            for j in range(num_columns):
                index = i * num_columns + j
                if index < num_images:
                    img = Image.open(os.path.join(self.folder_path, images[index]))
                    axs[i, j].imshow(img)
                    axs[i, j].axis(axis)  
                else:
                    axs[i, j].axis('off')  

        plt.tight_layout()
        plt.show()
