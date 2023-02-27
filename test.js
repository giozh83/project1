
let data
let data_tp_finder
let data_tp_finder_for


function cxrili(){
    document.querySelector('.cxrili').innerHTML=document.querySelector('.cxrili').innerHTM
    document.querySelector('.cxrili').innerHTML+=`<tr>
                                                      <th class="cxrili_cha1">TP</th>
                                                      <th class="cxrili_cha1">ძველი პარტი </th>
                                                      <th class="cxrili_cha1">ახალი პარტი  </th>
                                                      <th class="cxrili_cha1">ინჟინერი   </th>
                                                      <th class="cxrili_cha1">ინჟინერი   </th>
                                                      </tr>
        
                                                          `
}


document.querySelector('.h1class_finder_tp').addEventListener('keydown',function(event){
if (event.key==='Enter') {
    // location.reload()
    const api_url_tp_finder =`http://127.0.0.1:1000/find_tp/${document.querySelector('.h1class_finder_tp').value}`
async function getISS1_tp_find(){
         const response = await fetch(api_url_tp_finder)
         data_tp_finder_for = await response.json()
         console.log(data_tp_finder_for[0]['ALD_PURT_NUMBER'])
        //  document.querySelector('.ALD_PURT_NUMBER').value=data[0]['ALD_PURT_NUMBER']
        //  document.querySelector('.NEW_PURT_NUMBER').value=data[0]['PART_NUMBER']
        
        cxrili()
        for (let i = 0; i < data_tp_finder_for.length; i++) {
            document.querySelector('.cxrili').innerHTML+=`         <tr>              
                                                                    <th class="cxrili_cha">${data_tp_finder_for[i]['TP']}</th>
                                                                    <th class="cxrili_cha">${data_tp_finder_for[i]['ALD_PURT_NUMBER']}</th>
                                                                    <th class="cxrili_cha">${data_tp_finder_for [i]['PART_NUMBER']}</th>
                                                                    <th class="cxrili_cha">${data_tp_finder_for[i]['Worker2']}</th>
                                                                    <th class="cxrili_cha">${data_tp_finder_for[i]['Worker1']}</th>
                                                                    </tr>`
              
            
            // document.querySelector('.data_parent').innerHTML+=`<option class="data_parent1" value="">
            //                                                                    ||  ტექ დავალება =>${data_tp_finder_for[i]['TP']}
            //                                                                    || ძველი პარტი  => ${data_tp_finder_for[i]['ALD_PURT_NUMBER']}
            //                                                                    || ახალი პარტი  => ${data_tp_finder_for[i]['PART_NUMBER']}
            //                                                                    || ინჟინერი      =>   ${data_tp_finder_for[i]['Worker2']}
            //                                                                    || ინჟინერი      =>   ${data_tp_finder_for[i]['Worker1']}
            //                                                                     </option>`

                               

            
            
        }   
}
getISS1_tp_find()


}
})



///////////////damateba//////////////////////////////
document.querySelector('.add_data').addEventListener('click',function(){
    let worker=document.querySelector('.saxeli_gvari').value;
    let worrker1=document.querySelector('.saxeli_gvari2').value;
    let serieli=document.querySelector('.SERIUL_NUMBER').value;
    let new_part=document.querySelector('.NEW_PURT_NUMBER').value;
    let ald_part=document.querySelector('.ALD_PURT_NUMBER').value;
    let TP=document.querySelector('.TP').value;
    const api_url2 =`http://127.0.0.1:1000/new_data/${TP}/${worker}/${worrker1}/${serieli}/${new_part}/${ald_part}`
    async function getISS3(){
        const response_tp_finder = await fetch(api_url2)
        data_tp_finder = await response_tp_finder.json()
        
        console.log(data_tp_finder.length)
        
        cxrili()
        for (let i = 0; i < data_tp_finder.length; i++) { 
            document.querySelector('.cxrili').innerHTML+=`
            <tr>
              <th class="cxrili_cha">${data_tp_finder[i]['TP']}</th>
              <th class="cxrili_cha">${data_tp_finder[i]['ALD_PURT_NUMBER']}</th>
              <th class="cxrili_cha">${data_tp_finder[i]['PART_NUMBER']}</th>
              <th class="cxrili_cha">${data_tp_finder[i]['Worker2']}</th>
              <th class="cxrili_cha"> ${data_tp_finder[i]['Worker1']}</th>
            </tr>
            `
            
        }
}
getISS3()
     
})


////////////////////////////////
function serch_add(){
    const api_url1 =`http://127.0.0.1:1000/damateba/${document.querySelector('.list1').value}`
async function getISS1(){
         const response = await fetch(api_url1)
         data = await response.json()
         console.log(data[0]['ALD_PURT_NUMBER'])
         document.querySelector('.ALD_PURT_NUMBER').value=data[0]['ALD_PURT_NUMBER']
         document.querySelector('.NEW_PURT_NUMBER').value=data[0]['PART_NUMBER']
}
getISS1()
}
///////////////////////////////
function serch(){

const api_url =`http://127.0.0.1:1000/main/`
async function getISS(){
         const response = await fetch(api_url)
         data = await response.json()
    
    console.log(data)
   
    
    for (let i = 0 ; i < data.length ; i++) {
        document.getElementById("browsers").innerHTML+=`<option value=${data[i]['ALD_PURT_NUMBER']}></option>`
       
                   }

 }


    getISS()

    // click1()
}

function clear_data(){
    location.reload();
}






// let k=0


document.querySelector('.list1').addEventListener('click',function(){
    if (document.querySelector('.list1').value==='') {
        // document.querySelector('.saxeli_gvari').clear_data
        // document.querySelector('.saxeli_gvari2').value=''

        
        serch()
        
    }
    
   
})

document.querySelector('.list1').addEventListener('keydown',function(event){
    if (event.key==='Enter') {
        console.log(event.key)
       serch_add()
    }
 
})

// document.querySelector('.data_set').addEventListener('click',function () {
//     document.querySelector('.gg').value='giorgi'
//   })


