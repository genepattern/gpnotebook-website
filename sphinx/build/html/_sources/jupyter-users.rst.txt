Jupyter Users
==================

1. GenePattern Notebook Extension
---------------------------------------------------------------
GenePattern Notebook is an extension for Jupyter. It provides a variety of tools for interacting with the powerful GenePattern platform from within a Jupyter Notebook environment. These tools include:

- Visual widgets for running bioinformatic analyses and submitting these analyses to a GenePattern server.
- Tools for visually sending results to downstream steps in a bioinformatic workflow.
- A WYSIWYG rich text editor for Markdown cells.
- Jupyter magics for creating GenePattern widgets.
- A Python library for programmatically working with the results of the analyses.

To use the GenePattern Notebook extension, you will need to register for an account. GenePattern usage is free and the software is open source under a BSD-style license.

2. What is GenePattern?
---------------------------------------------------------------
GenePattern is a powerful platform for reproducible bioinformatic research. It provides hundreds of analytical tools for the analysis of gene expression (RNA-seq and microarray), sequence variation and copy number, proteomic, flow cytometry, and network analysis.

For more information visit our main GenePattern page. For introductory information about GenePattern, please see our 10-minute tutorial and/or check out one of our video tutorials.

3. GenePattern Cells
---------------------------------------------------------------
GenePattern cells are Python code cells which are automatically executed, and which display a visual widget for submitting GenePattern analyses or working with the results of these analyses. These cells are displayed as a new cell type, and can be added either through the Jupyter menu or through the GenePattern Notebook search functionality.

.. image:: ../../../wp-content/uploads/2017/02/content_screen_shot_2015-10-22_at_11_50_01.png

.. image:: ../../../wp-content/uploads/2017/02/content_screen_shot_2015-08-24_at_10_30_39.png

GenePattern cells come in three types: authentication, task cells and job cells.

**A. Authentication cells** are used to authenticate the notebook user with a GenePattern server. One of these cells must be added to a notebook and the user authenticated before the functionality of other GenePattern cells becomes available. If a GenePattern cell is added to a notebook before authentication has happened, it will automatically become one of these cells.

.. image:: ../../../wp-content/uploads/2017/02/content_screen_shot_2015-08-24_at_10_27_12.png

**B. Task cells** each represent a particular type of analysis on the GenePattern platform. Hundreds of diferent analyses are available. These cells will present a form to the user, accepting data or other parameters. Once one of these forms has been filled out, the user can then run the analysis by clicking the Run button. This will submit the analysis to the GenePattern server, and create a Job cell which represents that particular submission.

.. image:: ../../../wp-content/uploads/2017/02/content_screen_shot_2015-08-24_at_10_32_11.png

**C. Job cells** are created when a GenePattern task cells are submitted to the GenePattern server. These cells will appear below the submitting task cell. The left of the cell will contain the timestamp for when the job was submitted, and the right will contain the job's status in GenePattern's queuing system. All jobs pass from a PENDING state into RUNNING, and from there either into the COMPLETE or ERROR states.

.. image:: ../../../wp-content/uploads/2017/02/content_screen_shot_2015-08-24_at_10_33_20.png

Once a job has finished running, any results output by the job will appear on the left below the submission timestamp. Clicking any of these results will open a menu containing different options for working with these files.

Since GenePattern cells are also Python code cells, all changes to the information in these widgets is reflected in the code and will be saved in the notebook's ipynb file. Similarly, sending one of these notebook files to a user without the GenePattern Notebook extension installed, will result in a complete notebook, albeit one where the cells with visual widgets are instead displayed as code.

To view the code backing a GenePattern cell, simply click the "Gear" button found on a GenePattern widget in the upper right corner and select "Toggle Code."

4. UI Builder
---------------------------------------------------------------
The UI Builder is a way to display any Python function or method call as an interactive widget. This will render the parameters of the function as a web form which can be filled out with numbers, string literals or with references to existing Python variables. Clicking the Run button on the widget will validate the form and execute the function using the supplied values.

The UI Builder will use any existing docstring for the function as a description in the widget, will infer parameter types from default values and will display parameter annotations as helpful text near each input.

To use render a function, simply import the GPUIBuilder class from the genepattern package and pass the function to its constructor.

.. image:: ../../../wp-content/uploads/2017/02/call-widget.jpg

5. GenePattern Python Library
---------------------------------------------------------------
Programmatic access to all GenePattern jobs and results is also automatically available using GenePattern's Python library. Any job executed in a notebook can afterward be referenced using

.. code-block:: bash

    job 

followed by the job number. For example, if a job is number 1170434, the variable name would be 

.. code-block:: bash
    
    job1170434 

Entering this into a code cell will return a reference to a GPJob object.

- For more information on using the GenePattern Python library, see the GenePattern Programmer's Guide.
- A notebook providing a tutorial for using the GenePattern Python Library is also available.

Code examples of how to reference GenePattern jobs or GenePattern result files are available in the notebook by clicking a job result and selecting "Send to Code" in the menu.

.. image:: ../../../wp-content/uploads/2017/02/content_screen-shot-2015-10-15-at-13_50.jpg

GPJob objects can also be programmatically created and executed without the need for a GenePattern cell or widget. For information on how to do this see the GenePattern Programmer's Guide or the GenePattern Python Tutorial notebook.