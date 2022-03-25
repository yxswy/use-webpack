const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

const app = express()
const paths = 