import React, { useEffect } from 'react';
//import myVideo from '../assets/myVideo.mp4'; // optional local video

function Videos() {
  // Load Twitter widgets.js once
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // YouTube video
  const youtubeVideos = [
    { id: "0IdqwA2GXgY", title: "My YouTube Video" },
  ];

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Videos</h1>

      {/* Local Video */}
      <h2 className="text-2xl font-semibold mb-4">Local Video</h2>
      <div className="grid grid-cols-1 mb-6">
        <video width="100%" controls>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* YouTube Video */}
      <h2 className="text-2xl font-semibold mb-4">YouTube Video</h2>
      <div className="grid grid-cols-1 mb-6">
        {youtubeVideos.map((video, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="mb-2 font-semibold">{video.title}</h3>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Twitter Video */}
      <h2 className="text-2xl font-semibold mb-4">Twitter Video</h2>
      <div className="grid grid-cols-1 mb-6">
        <div
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="twitter-tweet"><p lang="et" dir="ltr">Oo Satybhama 💟 <a href="https://t.co/rGWgzTp7ch">pic.twitter.com/rGWgzTp7ch</a></p>&mdash; artsy (@artsy_7) <a href="https://twitter.com/artsy_7/status/2001980078029259157?ref_src=twsrc%5Etfw">December 19, 2025</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
          }}
        />
      </div>
    </section>
  );
}

export default Videos;
