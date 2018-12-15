# Javascript Testing Framework

This file contains a basic framework for testing javascript code using describe
and it blocks along with the familiar expect method.  The following matchers
have been included for use with the expect method:

- ``toEqual`` - for testing forms of equality
- ``toBeAnArray`` - for testing whether something is an array  

## How to use

Any files containing tests should be saved in the ``spec`` folder and code to be
tested should be saved in the ``src`` folder.

Any files added to these folders will need to be included in the header of the
``SpecRunner.html`` file.

Once you have written your tests and included your files in the SpecRunner file, just run the following command in the command line:
```
open SpecRunner.html
```
This will open the SpecRunner in your browser and run the tests.  To see the results you will need to have the developer tools console open. (To open dev tools and the console right click on the page, choose ``inspect``, then click on the tab named ``console``).
