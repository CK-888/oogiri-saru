import fetch from "node-fetch";

export async function getAllPostsData() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
	  );
	  const tasks = await res.json();
	  const filteredTask = tasks.sort(
		(a, b) => new Date(b.created_at) - new Date(a.created_at)
	  );
	  return filteredTask;
}

export async function getAllPostIds() {
	const res = await fetch(
	  new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
	);
	const tasks = await res.json();
	return tasks.map((task) => {
	  return {
		params: {
		  id: String(task.id),
		},
	  };
	});
  }

  export async function getPostData(id) {
	const res = await fetch(
	  new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`)
	);
	const task = await res.json();
	// return {
	//   task,
	// };
	return task;
  }