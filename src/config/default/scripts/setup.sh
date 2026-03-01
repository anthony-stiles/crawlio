#!/bin/bash
npm install
npm run build
uv sync
source .venv/bin/activate