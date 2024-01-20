
export default function LoginSignup() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

  }
  return (

    <div>
      <form action="" onSubmit={handleSubmit(e)}>
        <input name="email" type="text" placeholder="Email"/>
        <input name="password" type="password" placeholder="Password"/>
        <button>Submit</button>
      </form>
    </div>
  )
}
