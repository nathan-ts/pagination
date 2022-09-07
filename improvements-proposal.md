# Improvements Proposal

## Questions
1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?
2. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

## Responses

1. 



2. The issue with nanoid is that the keys will be randomly generated. React does not like this, as React expects the key attribute for a component to remain consistent across renders, which aids optimization among other things. The best way to fix this is to use another property or even the array index as a key instead, since that does not change from render to render. 