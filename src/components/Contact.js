const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold m-2 p-2 text-xl">Contact Us Page</h1>

            <form>
                <input className="border border-black p-2 m-2" placeholder="Name"/>
                <input className="border border-black p-2 m-2" placeholder="Message"/>

                <button className="bg-gray-600 text-white p-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;