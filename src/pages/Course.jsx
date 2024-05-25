import axios from "axios";

const Course = () => {
  const handleForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const image = form.image.value;

    const data = { title, price, image };
    
    
    // await fetch("http://localhost:3000/courses", {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then((res) => res.json())
    // .then((data) => console.log(data)); 
    await axios.post("http://localhost:3000/courses", data)
  };
  return (
    <div className="w-1/2 mx-auto min-h-screen py-20">
      <div className="shadow-2xl bg-base-100">
        <form onSubmit={handleForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Picture"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Course;
