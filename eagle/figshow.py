import os
import matplotlib.pyplot as plt
from PIL import Image

class ImageGridDisplay:
    def __init__(self, folder_path, figsize=(10, 10), axis='off'):
        self.folder_path = folder_path
        self.figsize = figsize
        self.axis = axis

    def display_images(self, grid_dimensions):
        a, b = grid_dimensions
        images = os.listdir(self.folder_path)[:a * b]   

        fig, axs = plt.subplots(a, b, figsize=self.figsize) 
        for i in range(a):
            for j in range(b):
                if i * b + j < len(images):
                    img = Image.open(os.path.join(self.folder_path, images[i * b + j]))
                    axs[i, j].imshow(img)
                    axs[i, j].axis(self.axis)  
                else:
                    axs[i, j].axis('off')  

        plt.tight_layout()
        plt.show()
