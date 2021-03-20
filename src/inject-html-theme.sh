#!/bin/bash

# Inject the default theme into the pre-rendered HTML,
# so that it renders properly with JS disabled

sed -i 's/<body/<body class="bright"/' dist/*.html dist/**/*.html