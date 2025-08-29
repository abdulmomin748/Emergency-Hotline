const callTimeData = [];
const callF = () => {
    const callBtns = document.querySelectorAll('.call-btn');
    for (const btn of callBtns) {
        btn.addEventListener('click',function(){
            const title = btn.parentNode.parentNode.children[0].innerText;
            const subTitle = btn.parentNode.parentNode.children[1].innerText;
            const emergencyNumb = btn.parentNode.parentNode.children[2].innerText;
            alert(`📞 Calling on ${subTitle} \n🔢 Number: ${emergencyNumb}`);
            
            const date = new Date();
            const getYear =  date.toLocaleDateString(); 
            const getTime = date.toLocaleTimeString("en-BD");
            
            callTimeData.push({title,emergencyNumb,getYear,getTime});
            console.log(callTimeData);
            
            // dekhte hbe
            const callsHisContainer = document.getElementById('call-items-cntlr');
            callsHisContainer.innerText = '';

            for (const singleData of callTimeData) {
                const div = document.createElement('div');
                div.innerHTML = `<div class="static bg-[#fafafa] p-3 mb-4">
                <div>
                    <h4 class="font-semibold">Fire Service Number</h4>
                    <span>999</span>
                </div>
                <div>
                    <span>11:36:58 Am -</span>
                    <span>28/08/2025</span>
                </div>
            </div>`
            callsHisContainer.appendChild(div);
            }
        })
    }

}
callF()
