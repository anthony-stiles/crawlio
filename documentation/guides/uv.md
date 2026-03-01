``` uv sync --all-packages ```
``` uv build ```
``` uv add --group test pytest ```
## Considerations
https://docs.astral.sh/uv/guides/integration/aws-lambda/#deploying-a-docker-image potential containerization
https://docs.astral.sh/uv/concepts/projects/dependencies/ dependency groups are this - use groups
https://gafni.dev/blog/cracking-the-python-monorepo/ mono-repos