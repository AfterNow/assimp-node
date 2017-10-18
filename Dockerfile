FROM debian:jessie

RUN apt-get update && apt-get install cmake git build-essential -y

RUN git clone https://github.com/assimp/assimp.git &&\
    cd assimp &&\
    cmake CMakeLists.txt -G 'Unix Makefiles' &&\
    make install 

ENV LD_LIBRARY_PATH=/usr/local/lib

