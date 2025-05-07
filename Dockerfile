FROM node:20-bullseye

RUN apt-get update && apt-get install -y \
    git \
    python3 \
    make \
    openjdk-17-jdk \
    unzip \
    wget \
    curl \
    && rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV ANDROID_SDK_ROOT=/opt/android-sdk

COPY package.json yarn.lock* ./
RUN npm install -g expo-cli

COPY . /app

WORKDIR /app

RUN yarn install || npm install

EXPOSE 8081

CMD ["npx", "expo", "start", "--tunnel"]

