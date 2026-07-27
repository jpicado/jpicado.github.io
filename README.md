# jpicado.github.io

Personal site for [josepicado.com](https://josepicado.com), built with
[Jekyll](https://jekyllrb.com/) and served by GitHub Pages.

## Local development

Requires Ruby 3.1+ (developed against 3.3).

```sh
bundle install
bundle exec jekyll serve     # http://127.0.0.1:4000
bundle exec jekyll build     # writes _site/
```

## Layout

| Path | What it is |
| --- | --- |
| `index.md` | The live home page |
| `indexV1.md`, `index_2019.md` | Archived earlier versions of the home page |
| `_layouts/`, `_includes/` | Site theme (based on the Shield template by TemplateMag) |
| `css/`, `js/`, `lib/` | Stylesheets, site JS, and vendored jQuery / Bootstrap / easing |
| `papers/`, `portfolio/`, `castor/` | Publication PDFs, project pages, and the Castor demos |

## Analytics

The old Universal Analytics tag was removed (Google shut UA down in July 2023).
To turn analytics back on, create a GA4 property and set the measurement ID in
`_config.yml`:

```yml
google_analytics: G-XXXXXXXXXX
```
