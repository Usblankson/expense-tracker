import React, {useState} from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

    return (
      <div>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Description</label>
                <input type="text" value={text} onchange={(e) => setText(e.target.value)} placeholder="Transaction description" />
            </div>
            <div className="form-control">
              <div>
              <button className="btn">+ Cash In</button>

            
             <div className="modal">

   
             <div className="modal-content">
              <span className="close">&times;</span>
             <p>Some text in the Modal..</p>
            </div>

                  </div>
                  <div>
                  <button className="btn">- Cash Out</button>

            
              <div className="modal">
                
                  
              <div className="modal-content">
               <span className="close">&times;</span>
              <p>Some text in the Modal..</p>
              </div>
                  
                   </div>
                  
                                </div>
                  </div>
            <label htmlFor="amount">Amount<br /> 
            </label>
            <input type="number" value={amount} onchange={(e) => setAmount(e.target.value)} placeholder="Amount"/>
            </div>
            <button className="btn">Add Transaction</button>

        </form>
      </div>
    )
}
