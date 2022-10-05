# Blank Repo Template

'Blank Repo' is a static HTML template designed for use on [BowTie.io](https://bowtie.io). This template should be used if you want to install a static site generator other than Jekyll, or build locally using a customized version of Jekyll. It includes static versions of our hosted error and maintenance pages compatible with those BowTie features.

_This template is meant as a learning resource and is not compatible with BowTie's Jekyll-based components and templates._


## Documentation
For thorough documentation of this template and the added BowTie features, view the [BowTie docs](https://bowtie.io/docs/#projects).

## Usage

Copy the desired contents of this repo to your local development environment and push the files to your remote branch.

You will need to build locally using a static generator of your choice, set the output directory of your desired generator to `_site` and push this directory to your git repository. The presence of a `_site` directory in the repository indicates that BowTie should not run the `jekyll build`, and should just publish the contents of `_site` directly.

Don’t forget to remove the `_site` entry from your `.gitignore` file; most of our templates include this line by default.


This template can be deployed automatically from the BowTie 'Add Project' interface available at [https://bowtie.io/projects/new](https://bowtie.io/projects/new), or can be pushed to your repository manually.  

_NOTE: This repo does not contain the settings.json file installed during BowTie project creation. You will need the settings.json file in order to build the project on push and to run the [local client](https://github.com/bowtie-io/bowtie-io)._
