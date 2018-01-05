#!/bin/bash

npm run build && aws s3 sync build/ s3://front-end-ui
# npm run build && aws s3 sync build/ s3://$1