import sys
import pytest
from packaging import version
import matplotlib
import pandas
import PIL

def test_matplotlib_version():
    # Check if the major version of matplotlib is compatible
    assert version.parse(matplotlib.__version__).major >= 3, "Requires matplotlib major version 3 or higher"

def test_pandas_version():
    # Check if the major version of pandas is compatible
    assert version.parse(pandas.__version__).major >= 2, "Requires pandas major version 2 or higher"

def test_pillow_version():
    # Check if the major version of Pillow is compatible
    assert version.parse(PIL.__version__).major >= 10, "Requires Pillow major version 10 or higher"
