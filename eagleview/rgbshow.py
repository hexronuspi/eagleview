import os
import matplotlib.pyplot as plt
from PIL import Image
import numpy as np

class RGBView:
    def __init__(self, image_path):
        self.image_path = image_path
        self.img = Image.open(image_path)

    def display_rgb_channels(self):
        # extract RGB channels
        r, g, b = np.array(self.img).T

        fig, axs = plt.subplots(1, 4, figsize=(15, 5))

        # display original image
        axs[0].imshow(self.img)
        axs[0].axis('off')
        axs[0].set_title('Original')

        # display particular RGB channels
        axs[1].imshow(r, cmap='Reds', aspect='auto')
        axs[1].axis('off')
        axs[1].set_title('Red Channel')

        axs[2].imshow(g, cmap='Greens', aspect='auto')
        axs[2].axis('off')
        axs[2].set_title('Green Channel')

        axs[3].imshow(b, cmap='Blues', aspect='auto')
        axs[3].axis('off')
        axs[3].set_title('Blue Channel')

        plt.tight_layout()
        plt.show()
