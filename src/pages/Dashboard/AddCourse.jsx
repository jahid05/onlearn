import axios from "axios";
import { Zoom, toast } from "react-toastify";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const AddCourse = () => {
  const handleForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const slogan = form.slogan.value;
    const price = form.price.value;
    const off_price = form.off_price.value;
    const id = form.id.value;
    const date = form.date.value;
    const description = form.description.value;
    const image = form.image.value;

    const data = { title, slogan, price, off_price, id, description, date, image };
    
    try {
      await axios.post("http://localhost:3000/courses", data);
      toast.success("Successful Added Course!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      form.reset()
      
    } catch (error) {
      toast.error("error.message", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }

    

    console.log(data);
  };
  return (
    <div className="bg-gray-900 min-h-screen px-6 lg:px-0 py-8">
      <SectionTitle title="Add Course" />
      <div className="lg:w-1/2 mx-auto bg-white rounded-2xl">
        <form onSubmit={handleForm} className="card-body">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Course Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Slogan</span>
              </label>
              <input
                type="text"
                name="slogan"
                placeholder="Slogan"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Discount</span>
              </label>
              <input
                type="text"
                name="off_price"
                placeholder="Discount"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
          <div className="form-control">
              <label className="label">
                <span className="label-text">ID No.</span>
              </label>
              <input
                type="number"
                name="id"
                placeholder="ID No."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Class Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered h-32"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6 ">
            <button className="btn text-white bg-theme-1">Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
