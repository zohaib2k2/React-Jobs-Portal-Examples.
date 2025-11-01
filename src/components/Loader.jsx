import SyncLoader from 'react-spinners/SyncLoader';


const override = {
  display: "block",
  margin: "100px auto",
};


const Loader = ({loading}) => {
  return (
    <SyncLoader
      color={"#3a85f6"}
      loading={loading}
      cssOverride={override}/>
  )
}

export default Loader