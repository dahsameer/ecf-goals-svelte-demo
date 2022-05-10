<script lang="ts">
  import { Post } from "./Post";

  async function getPosts() {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		const posts: Array<Post> = await res.json();

		if (res.ok) {
			return posts;
		} else {
			throw new Error("error while getting data");
		}
	}

	let promise = getPosts();

</script>

<main>
  {#await promise}
	<p>Loading</p>
{:then posts}
  <ul>
    {#each posts as post}
      <li>{post.title}</li>
    {/each}
  </ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
