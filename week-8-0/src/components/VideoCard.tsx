const VideoCard = () => {
  return (
    <>
      <div>
        <img src="thumbnail.jpeg" alt="thumbnail" className="w-full" />
        <div className="grid grid-cols-12 p-4 gap-4">
          <div className="col-span-2 ">
            <img
              src="thumbnail.jpeg"
              alt="thumbnail"
              className="rounded-full w-12 h-12"
            />
          </div>
          <div className="col-span-10 self-center">
            <div>The Video Name</div>
            <div>100k | 3 hours ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
