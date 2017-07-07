#!/bin/bash

#
# BUILD TRIGGERED BY: https://github.com/codeclou/jenkins-github-webhook-build-trigger-plugin
#

set -e

bash ./node_modules/@cloukit/library-build-chain/jenkins.sh
