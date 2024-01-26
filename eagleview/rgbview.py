# rgbview.py

import os
import matplotlib.pyplot as plt
from PIL import Image
import numpy as np

class RGBView:
    def __init__(self, path):
        self.path = path

        if os.path.isdir(path):
            # If path is a directory, get the first 4 images in the directory
            images = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]
            if images:
                self.img_paths = [os.path.join(path, img) for img in images[:4]] # limit img using slicing 
            else:
                raise ValueError(f"No image files found in {path}.")
        else:
            raise ValueError(f"Invalid path: {path}")

        self.original_imgs = [Image.open(img_path) for img_path in self.img_paths]
        self.rgb_imgs = [self._prepare_image(img, original_img) for img, original_img in zip(self.original_imgs, self.original_imgs)]

    def _prepare_image(self, img, original_img):
        #img orientation (vertical)
        if original_img.width > original_img.height:
            img = img.transpose(Image.Transpose.ROTATE_270)
        return img

    def _flip_rgb_vertically(self, r, g, b):
        return np.flipud(r), np.flipud(g), np.flipud(b)

    def show_rgb(self):
        fig, axs = plt.subplots(4, 4, figsize=(15, 15))

        for i, (img_path, original_img, rgb_img) in enumerate(zip(self.img_paths, self.original_imgs, self.rgb_imgs)):
            # extract
            r, g, b = np.array(rgb_img).T

            # flip vertically
            r, g, b = self._flip_rgb_vertically(r, g, b)

            # Display original image
            axs[i, 0].imshow(original_img)
            axs[i, 0].axis('off')
            axs[i, 0].set_title(f'Original - {os.path.basename(img_path)}')

            # Display vertically mirrored RGB channels
            axs[i, 1].imshow(r, cmap='Reds', aspect='auto', origin='upper') 
            axs[i, 1].axis('off')
            axs[i, 1].set_title('Red Channel (Mirrored)')

            axs[i, 2].imshow(g, cmap='Greens', aspect='auto', origin='upper')
            axs[i, 2].axis('off')
            axs[i, 2].set_title('Green Channel (Mirrored)')

            axs[i, 3].imshow(b, cmap='Blues', aspect='auto', origin='upper')
            axs[i, 3].axis('off')
            axs[i, 3].set_title('Blue Channel (Mirrored)')

        plt.tight_layout()
        plt.show()
