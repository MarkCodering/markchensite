/* eslint-disable react-hooks/rules-of-hooks */
const newsletters_substack = [
  {
    title: "Vector Space - An Notion Template for AI Engineers",
    subtitle:
      "An all-in-one guide for new and experienced AI engineers to learn more about the fields with the dynamic and up-to-date contents",
    url: "https://open.substack.com/pub/mindifyai/p/vector-space-an-notion-template-for-ai-engineers?r=1ebw6f&utm_campaign=post&utm_medium=web",
    image_url:
      "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5fb43bfa-4cc7-4b06-9b3a-7622d52e99cc_1920x1080.png",
  },
];

export default function Newsletters() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl font-bold">Newsletters</h1>
      <div className="flex flex-wrap justify-around items-center max-w-4xl mt-6 sm:w-full">
        {newsletters_substack.map((newsletter, index) => (
          <a
            key={index}
            href={newsletter.url}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <img src={newsletter.image_url} className="rounded-lg" />
            <h2 className="mt-4 text-xl font-bold">{newsletter.title}</h2>
            <p className="mt-2 text-lg">{newsletter.subtitle}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
