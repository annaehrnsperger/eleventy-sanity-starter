const link = `
  link{
    ...,
    'page': page->slug.current
  },
`;

const media = `
  media{
    type,
    'image': image.image.asset->url,
    'alt': image.alt,
    'video': video.videoUrl,
    'video': video.asset->playbackId,
    'poster': video.poster.asset->url,
  },
`;

module.exports.link = link;
module.exports.media = media;
