# Improvements Proposal

## Questions

1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?
2. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

## Responses

1. The main change is that there is no guarantee as to when or if blog posts will load into memory. I would use `useEffect` to fetch the blog posts from the backend API or CMS. 

   a. The rendering for the blog posts would then account for an empty state (i.e., before any posts are loaded), and show a placeholder until blog posts are loaded in.

   b. The application would also need to show an error state if the fetch/API call times out, and inform the user that the program is not working as expected.

   c. If there are a large number of blog posts, I would read in the posts in chunks (assuming the API supports it). For blog posts stored locally, use ReadableStream to get the data line by line and parse each blog post separately. 

2. The issue with Nano ID is that the keys will be randomly generated. React does not like this, as React expects the key attribute for a component to remain consistent across renders, which aids optimization among other things. The best way to fix this is to use another property or even the array index as a key instead, since that does not change from render to render.

   a. Specifically for these blog posts, use the blog post id field as the key instead. 
