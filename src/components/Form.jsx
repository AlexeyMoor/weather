const Form = ({getWeather, loading}) => {

  const handleClickSubmit = e => {
    e.preventDefault();
    const city = e.currentTarget.city.value.trim();
    getWeather(city);
  }
  return (
    <form onSubmit={handleClickSubmit}>
      <input type={'text'} name={'city'} placeholder={'Enter city name'} />
      <button type={'submit'} disabled={loading}>
        {loading ? 'Loading...' : 'Get Weather'}
      </button>
    </form>
  );
};

export default Form;