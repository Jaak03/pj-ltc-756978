FROM node:21.7.1-bullseye-slim

# Update and install dependencies
RUN apt-get update && apt-get install -y \
    wget \
    git \
    bash \
    curl \
    && apt-get clean

# Environment variable to suppress interactive prompts during Oh My Bash installation
ENV TERM xterm

# Install Oh My Bash
RUN bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"

# Open up the default shell and source the configuration (for future commands)
RUN echo 'source ~/.bashrc' >> ~/.bash_profile

# Set the default shell to bash
SHELL ["/bin/bash", "-c"]

WORKDIR /workspace