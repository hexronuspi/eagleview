import os
import matplotlib.pyplot as plt
from PIL import Image
import math

class ImageMatrix:#just gives folder names, and it plots images without hasling with parameters
    def __init__(self, folder_path, figsize=(10, 10), axis='off'):
        self.folder_path = folder_path
        self.figsize = figsize
        self.axis = axis

    def list_and_display_images(self):
        images = [f for f in os.listdir(self.folder_path) if f.lower().endswith(('.png', '.jpeg'))]

        if not images:
            print("No images found in the specified folder.")
            return

        num_images = len(images)

        if num_images == 1:
            img = Image.open(os.path.join(self.folder_path, images[0]))
            plt.figure(figsize=self.figsize)
            plt.imshow(img)
            plt.axis(self.axis)
            plt.show()
        else:
            num_rows = min(3, math.ceil(num_images / 3))
            num_columns = min(3, num_images)

            fig, axs = plt.subplots(num_rows, num_columns, figsize=self.figsize) 
            for i in range(num_rows):
                for j in range(num_columns):
                    index = i * num_columns + j
                    if index < num_images:
                        img = Image.open(os.path.join(self.folder_path, images[index]))
                        axs[i, j].imshow(img)
                        axs[i, j].axis(self.axis)  
                    else:
                        axs[i, j].axis('off') 

            plt.tight_layout()
            plt.show()

