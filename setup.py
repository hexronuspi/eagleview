
from setuptools import setup, find_packages
import codecs
import os

VERSION = '0.0.1'
DESCRIPTION = 'Dataset Visualization tool'
LONG_DESCRIPTION = 'A package that allows to visualize datasets in minimal line of code'

# Setting up
setup(
    name="eagleview",
    version=0.0.1,
    author="hexronuspi (Aditya Raj) and contributors",
    long_description_content_type="text/markdown",
    long_description=long_description,
    packages=find_packages(),
    install_requires=['matplotlib', 'Pillow'],
    keywords=['python', 'datasets', 'visualize'],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: Unix",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
    ]
)
