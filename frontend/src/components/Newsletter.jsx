import React, {useState} from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const response = await fetch('newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok){
        setResponse('Subscribe successfully!');
      } else {
        throw new Error('failed to subscribe');
      }
    }catch (error) {
      setResponse('Am error occurred. Please try again later.');
    }
    setSubscribing(false); 
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
      <div name='newsletter' className='w-full text-gray-300 bg-[#14101b] p-4 h-screen md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600'>Newsletter</p>
                <p className='text-2xl text-gray-300 py-4'>Welcome to My Portfolio's Newsletter! I'm Vivek, a software developer. 
                Join me as we explore the exciting world of technology, discussing coding, emerging technologies, and the impact of tech on.</p>
            </div>
            <div name="newsletter" action="" class="flex justify-center items-center">
              <form onSubmit={handleSubmit} class="bg-[#14101b] flex text-black">
                <input class="my-4 px-6 py-2 bg-[#ccd6f6] rounded-l-lg" type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
                <button class="text-white border-2 hover:bg-teal-600 hover:border-teal-600 my-4 px-4 py-1 flex items-center rounded-r-lg style" type='submit' disabled={subscribing}>Submit</button>
                {response && <p>{response}</p>}
              </form>
            </div>
        </div>
      </div>
  );
};

export default Newsletter
 