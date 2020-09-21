#!/bin/bash

curl \
  --header "Authorization: Token 9f055bcb-fdff-438b-bbe1-80d28cb54bfd" \
  --header "Content-Type: application/json" \
  --data "{
    \"value\":\"42 %\",
    \"sha\":\"$(git rev-parse HEAD)\"
  }" \
  https://seriesci.com/api/sambacha/evo_spec/:series/one
