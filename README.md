`ongoing`
<p align="center">
  Colab Preview for Code <br>
  <a href="https://colab.research.google.com/drive/1ZklXjCLbrZIACctPS4EKZ4ZnuqdjonO4?usp=sharing" target=" ">
    <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open in Colab">
  </a>
</p>

# eagleview

A package for greatly increasing the visualisation of datasets, in an easy manner.

## Usage

1. Clone the repository:

```bash
!git clone https://github.com/hexronuspi/eagle
```
2. Upload the folder containing your images. If they are in a zip or any other file, extract them first.

3. Navigate to the cloned repository:

```
%cd eagle
```

4. Install the package:

```
!pip install .
```

5. Use the package in your Python code:

```python
from eagle.figshow import ImageGridDisplay

image_display = ImageGridDisplay('/content/path_to_folder_containing_images')
image_display.display_images((2, 3), False)
```

This will display the images in a grid with 3 columns and 2 rows, without printing the left out images. If you want to print all images, you can call `image_display.display_images((2, 3))` or `image_display.display_images((2, 3), True)`.
