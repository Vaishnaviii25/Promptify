// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import Form from "@components/Form";

// const EditPrompt = () => {
//   const router = useRouter();

//   const searchParams = useSearchParams();
//   const promptId = searchParams.get("id");

//   const [submitting, setSubmitting] = useState(false);
//   const [post, setPost] = useState({
//     prompt: "",
//     tag: "",
//   });

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();

//       setPost({
//         prompt: data.prompt,
//         tag: data.tag,
//       });
//     };

//     if (promptId) getPromptDetails();
//   }, [promptId]);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     if (!promptId) return alert("Prompt ID not found");

//     try {
//       const response = await fetch(`/api/prompt/${promptId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Form
//       type="Edit"
//       post={post}
//       setPost={setPost}
//       submitting={submitting}
//       handleSubmit={updatePrompt}
//     />
//   );
// };

// export default EditPrompt;

// -------- before deploying

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import Form from "@components/Form";

// const UpdatePrompt = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const promptId = searchParams.get("id");

//   const [post, setPost] = useState({ prompt: "", tag: "", });
//   const [submitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();

//       setPost({
//         prompt: data.prompt,
//         tag: data.tag,
//       });
//     };

//     if (promptId) getPromptDetails();
//   }, [promptId]);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!promptId) return alert("Missing PromptId!");

//     try {
//       const response = await fetch(`/api/prompt/${promptId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Form
//       type='Edit'
//       post={post}
//       setPost={setPost}
//       submitting={submitting}
//       handleSubmit={updatePrompt}
//     />
//   );
// };

// export default UpdatePrompt;

// ---------------------------------------
// "use client"

// import { useEffect, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Form from "@components/Form";

// const FetchPromptDetails = ({ promptId, setPost }) => {
//   useEffect(() => {
//     const getPromptDetails = async () => {
//       if (!promptId) return;
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();
//       setPost({
//         prompt: data.prompt,
//         tag: data.tag,
//       });
//     };
//     getPromptDetails();
//   }, [promptId, setPost]);

//   return null; // This component does not render anything
// };

// const UpdatePrompt = () => {
//   const router = useRouter();
//   const [searchParams] = useSearchParams();
//   const promptId = searchParams.get("id");

//   const [post, setPost] = useState({ prompt: "", tag: "" });
//   const [submitting, setIsSubmitting] = useState(false);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!promptId) {
//       alert("Missing PromptId!");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch(`/api/prompt/${promptId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.error("Error updating prompt:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <FetchPromptDetails promptId={promptId} setPost={setPost} />
//       <Form
//         type="Edit"
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={updatePrompt}
//       />
//     </Suspense>
//   );
// };

// export default UpdatePrompt;

// -------

// import { Suspense, useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Form from "@components/Form";

// const FetchPromptDetails = ({ promptId, setPost }) => {
//   useEffect(() => {
//     if (!promptId) return;

//     const getPromptDetails = async () => {
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();
//       setPost(data);
//     };

//     getPromptDetails();
//   }, [promptId, setPost]);

//   return null; // This component does not render anything
// };

// const UpdatePrompt = () => {
//   const router = useRouter();
//   const { id: promptId } = router.query; // Access query parameters directly

//   const [post, setPost] = useState({ prompt: "", tag: "" });
//   const [submitting, setIsSubmitting] = useState(false);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!promptId) {
//       alert("Missing PromptId!");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch(`/api/prompt/${promptId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(post),
//       });

//       if (response.ok) {
//         router.push("/");
//       } else {
//         throw new Error("Failed to update prompt");
//       }
//     } catch (error) {
//       console.error("Error updating prompt:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Suspense>
//         <FetchPromptDetails promptId={promptId} setPost={setPost} />
//         <Form
//           type="Edit"
//           post={post}
//           setPost={setPost}
//           submitting={submitting}
//           handleSubmit={updatePrompt}
//         />
//       </Suspense>
//     </>
//   );
// };

// export default UpdatePrompt;

"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdatePromptPage = () => {
 
  return (
    <Suspense fallback={<><p>Loading...</p></>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;


const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);

  const updatePrompt = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    if (!promptId) {
      return alert("Prompt ID not found.");
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};