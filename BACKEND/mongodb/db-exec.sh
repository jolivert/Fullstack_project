#!/bin/sh
docker exec -it mongodb_fullstack_project mongosh -U admin_mongodb -p fullstack_project$ -f $1