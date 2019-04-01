Public Notebooks
================

Public Notebook Collection
-----------------------------------------
GenePattern Notebook provides a repository where users can publicly disseminate their notebooks. It includes notebooks developed by the GenePattern team demonstrating a number of genomic and machine learning analyses, as well as notebooks contributed by the user community.

When using the GenePattern Public Notebook Collection, users have the ability to publicly share their notebooks and to run notebooks shared by others.


.. raw:: html

    <div class="container-fluid" style="border: 1px solid black; padding: 20px; background-color: rgba(0,0,0,0.1); padding-bottom: 0px; position: relative; width: 100%;">
        <h1 style="margin-bottom: 20px; font-size: 30px;">Public notebooks</h1>
        <hr>
        <div id="notebook_list" class="scrollable-menu" role="menu" style="max-height: 100%; overflow-x: hidden; overflow-y: scroll; margin-right: 1px;"></div>
        <script type="application/javascript">
        $.ajax({
            type: "GET",
            url: "https://notebook.genepattern.org/services/sharing/notebooks/",
            dataType: "json",
            cache: false,
            success: function (data) {
            const notebooks = data.results;
            notebooks.forEach(function (nb) { if (nb.author == "GenePattern Team") { $(`<div class="notebook-listing" style="padding: 10px; background-color: white; margin: 0 auto; margin-bottom: 10px; border: 1px solid grey"><h3 class="notebook-name" style="color: #103875; font-size: 20px; font-weight: 600; margin: 0px auto;"><a href="https://notebook.genepattern.org/services/sharing/notebooks/${nb.id}/preview/" target="_blank">${nb.name}</a></h3> <address class="notebook-author" rel="author" style="font-size: 14px;">${nb.author}</address><address class="notebook-quality" rel="quality" style="font-size: 12px;">${nb.quality}</address><p class="notebook-description" style="font-size: 12px; margin-bottom: 0px;">${nb.description}</p></div>`)
                    .appendTo("#notebook_list");
                }
            });
            },
            error: function (error) {
            console.log(error);
            }
        });
        </script>
    </div><br>


Browsing and Loading Public Notebooks
-----------------------------------------
- Log in to the GenePattern Notebook Repository
- To view the available notebooks, click the "Public Notebooks" tab and browse through the list.
- To obtain a copy and run the shared notebook, click the notebook in the list and then select "Get a Copy" on the confirmation dialog that pops up. This will make a copy of the chosen notebook in your current directory, accessible by clicking on the Files tab.
- To run the notebook, click the "Click here if you would like to open this notebook" link in the resulting dialog, or go back to the "Files" tab and run the notebook as normal from there.