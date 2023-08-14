import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const PetContext = () => {
  const { userInfo } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(true);
  const [pet, setPet] = useState({});
  const [clinic, setClinic] = useState([]);

  const getMascota = async() => {

    try {
        
        const resp = await axios.get(`http://192.168.200.4:8000/mascota/usuario/${userInfo.idAdoptante}/`);
        setisLoading(false);
        setPet(resp?.data[0]);
        setClinic(resp?.data[0].vacunas);
      } catch (error) {
        console.log(error);
      }


    /*
    try {
      //const url = "http://192.168.200.4:8000/user/data";
      const resp = await axios.get(
        `http://192.168.200.4:8000/mascota/usuario/${userInfo.idAdoptante}/`
      );
    
      console.log(resp.data);
      //setPet(resp.data);
    } catch (error) {
      console.log(error);
    }
*/
    /* 
    axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+userInfo.access
            },   
    }).then(res => {




        // *********************
        axios.get(`http://192.168.200.4:8000/mascota/usuario/${res.data?.iduser}/`,
        {
            headers: {
                'Content-Type': 'application/json',
            },   
        }).then(res => {
            setisLoading(false);
            let data = res.data
            setPet(data)
        }).catch(e => {
            console.log(`data error ${e}`);
            });
        // *********************
    }).catch(e => {
        console.log(`data error ${e}`);
    });
*/
  };

  const getVacunas = () => {
    const url = "http://192.168.200.4:8000/user/data";
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.access,
        },
      })
      .then((res) => {
        // *********************
        axios
          .get(
            `http://192.168.200.4:8000/vacuna/mascota?iduser=${res.data.iduser}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setisLoading(false);
            let data = res.data;
            setClinic(data);
          })
          .catch((e) => {
            console.log(`data error ${e}`);
          });
        // *********************
      })
      .catch((e) => {
        console.log(`data error ${e}`);
      });
  };

  useEffect(() => {
    getMascota();
   // getVacunas();
  }, []);

  return {
    pet,
    clinic,
    isLoading,
  };
};
