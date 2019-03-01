---
title: 'GenePattern Python 1.4.0 (December 8, 2017)'
date: 2017-12-08 14:21:18
tags: python
---

Release updates for the GenePattern Python Library. Install using ``pip install genepattern-python`` or ``conda install -c genepattern genepattern-python``.

- Added write_gct() and write_odf(), which write pandas dataframes to disk in GCT or ODF formats, respectively.
- ODF() and GCT() now directly create pandas dataframes from the loaded data.
- Added get_recent_jobs() function to retrieve a list of recently launched jobs.
- Dropped Python 2 support.