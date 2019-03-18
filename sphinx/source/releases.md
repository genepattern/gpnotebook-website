---
title: Release Notes
---

GenePattern Notebook Repository
===============================

Release updates for the GenePattern Notebook Repository.

GenePattern Notebook Repository 18.07 (July 24, 2018)
-----------------------------------------------------

-   Added the ability for users to easily share notebooks with others.
-   Improved integration with JupyterHub's Services API.
-   Admins now have an interface for pinning and protecting tags..
-   Improved preview functionality for the public notebooks.
-   Added support for the NDEx2 API

GenePattern Notebook Repository 18.03 (March 23, 2018)
------------------------------------------------------

-   Tagging functionality added to the Public Notebooks tab.
-   Public Notebooks tab UI redesign.
-   Preview functionality added to public notebooks.

GenePattern Notebook Repository 18.01 (January 19, 2018)
--------------------------------------------------------

-   Upgraded repository to JupyterHub 0.8, Jupyter 5.3 and ipywidgets 7.
-   Updated repository containers to include R 3.4.3 and rpy2 package.
    See R Support documentation for more details.
-   Updated spawner and authenticator plugins to latest JupyterHub API.

GenePattern Notebook Repository 17.12 (December 8, 2017)
--------------------------------------------------------

-   Improved compute node scaling and performance.
-   Public notebook service port change.

GenePattern Notebook Repository 17.07 (July 27, 2017)
-----------------------------------------------------

-   Support for Python environment versioning added.
-   Python 3 kernel updated to Python 3.6.
-   GenePattern Notebook extension updated to v0.6.4.
-   GenePattern Python library updated to v1.3.0.
-   Scientific computing libraries updated.
-   Deprecated Python 2 kernel.

GenePattern Notebook Repository 17.05 (May 15, 2017)
----------------------------------------------------

-   Notebook sharing functionality.
-   Infrastructure update (AWS hosting).

------------------------------------------------------------------------

GenePattern Notebook Extension
==============================

Release updates for the GenePattern Notebook nbextension. Install using
`pip install genepattern-notebook` or
`conda install -c genepattern genepattern-notebook`.

GenePattern Notebook 0.7.2 (May 30, 2018)
-----------------------------------------

-   Analysis and job widgets will now appear together in the same cell
    by default.
-   UI Builder cells and outputs will now appear together in the same
    cell.
-   Added a new widget GPUIOutput intended to visually display
    programmatic output.
-   An icon has been added to job widgets, indicating their sharing
    status.
-   Bug fixes.

GenePattern Notebook 0.7.1 (March 21, 2018)
-------------------------------------------

-   UI Builder file upload added.
-   Double-click to edit file parameter functionality added.
-   Added parameter reset to analysis widgets.
-   Bug fixes.

GenePattern Notebook 0.7.0 (February 16, 2018)
----------------------------------------------

-   GenePattern workflow execution interface added. For more information
    see the Workflow Execution documentation.
-   Support for job result syntax added to GenePattern analyses. This is
    a simple syntax for specifying GenePattern analysis inputs based on
    the output of of upstream jobs. For more information see the Job
    Result Syntax documentation.
-   Added support for renaming, hiding or overriding the output variable
    in the UI Builder.
-   Major refactoring of code structure and file names.
-   Updated Javascript code to ES6 standard.
-   New webpack build process added.
-   Bug fixes.

GenePattern Notebook 0.6.8 (December 8, 2017)
---------------------------------------------

-   UI Builder now has type-specific support for file, number, password
    and bool parameters.
-   Placeholder job cells added.
-   Job cells can now send a browser notification when a job completes.
-   Added the ability to programmatically set the output variable in the
    UI Builder.
-   Add ability to pass in custom function import path in the UI
    Builder.
-   Bug fixes.

GenePattern Notebook 0.6.7 (November 8, 2017)
---------------------------------------------

-   Improved UI Builder customization and features.
-   Usability improvements.
-   Bug fixes.

GenePattern Notebook 0.6.6 (October 13, 2017)
---------------------------------------------

-   UI Builder support for choice parameters and dynamic configuration.
-   Support for ipywidgets 7.
-   Bug fixes.

GenePattern Notebook 0.6.5 (September 15, 2017)
-----------------------------------------------

-   Beta release of the UI Builder.
-   Package restructuring to better fit Python standards.
-   Bug fixes.

GenePattern Notebook 0.6.4 (July 27, 2017)
------------------------------------------

-   Added support for parameter groups
-   UI Builder alpha release

GenePattern Notebook 0.6.3 (June 28, 2017)
------------------------------------------

-   Bug fix release for low-numbered LSIDs

------------------------------------------------------------------------

GenePattern Python Library
==========================

Release updates for the GenePattern Python Library. Install using
`pip install genepattern-python` or
`conda install -c genepattern genepattern-python`.

GenePattern Python 1.4.1 (February 16, 2018)
--------------------------------------------

-   CLS file creation function added to gp.data package.
-   JSON serialization added to GPFile object.

GenePattern Python 1.4.0 (December 8, 2017)
-------------------------------------------

-   Added write\_gct() and write\_odf(), which write pandas dataframes
    to disk in GCT or ODF formats, respectively.
-   ODF() and GCT() now directly create pandas dataframes from the
    loaded data.
-   Added get\_recent\_jobs() function to retrieve a list of recently
    launched jobs.
-   Dropped Python 2 support.

GenePattern Python 1.3.1 (September 15, 2017)
---------------------------------------------

-   Support for local and remote LSID authorities when generating
    GenePattern modules from Python scripts.

GenePattern Python 1.3.0 (July 27, 2017)
----------------------------------------

-   Functionality added for creating GenePattern modules from Python
    (gp.modules)

------------------------------------------------------------------------

Notebook Tool Manager
=====================

Release updates for the Notebook Tool Manager. Install using
`pip install nbtools` or `conda install -c genepattern nbtools`.

Notebook Tool Manager 0.1.7 (April 3, 2018)
-------------------------------------------

-   Changed nbextension installation to match new Jupyter 5.3+ standard.

Notebook Tool Manager 0.1.6 (December 8, 2017)
----------------------------------------------

-   Focus is now automatically given to the search/filter box when the
    toolbox is opened.

Notebook Tool Manager 0.1.5 (October 19, 2017)
----------------------------------------------

-   Button label for for Jupyter &gt;= 5.1.0.

------------------------------------------------------------------------

Rich Text Editor
================

Release updates for the Rich Text Editor. Install using
`pip install jupyter-wysiwyg` or
`conda install -c genepattern jupyter-wysiwyg`.

Rich Text Editor 0.1.8 (May 3, 2018)
------------------------------------

-   Added LICENSE.txt file to PyPI source archive.

Rich Text Editor 0.1.7 (April 26, 2018)
---------------------------------------

-   Fixed an issue that could call installation to fail due to a bug in
    setuptools.

Rich Text Editor 0.1.6 (April 3, 2018)
--------------------------------------

-   Changed nbextension installation to match new Jupyter 5.3+ standard.
-   Bug fix for behavior when switching between command and edit modes.

Rich Text Editor 0.1.5 (February 16, 2018)
------------------------------------------

-   Bootstrap style support added to the editor.
