import os
import matplotlib.pyplot as plt
from PIL import Image

def eagle_figshow(dimensions, folder_path, figsize):
    a, b = dimensions
    images = os.listdir(folder_path)[:a * b]   # Get a*b images from the folder
    
    fig, axs = plt.subplots(a, b, figsize=figsize)  # Use the provided figsize
    for i in range(a):
        for j in range(b):
            if i * b + j < len(images):
                img = Image.open(os.path.join(folder_path, images[i * b + j]))
                axs[i, j].imshow(img)
                axs[i, j].axis('off')  # Turn off axis labels
            else:
                axs[i, j].axis('off')  # If no more images, turn off that subplot
    
    plt.tight_layout()
    plt.show()
