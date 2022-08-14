import React from 'react';

const Grap2Third = () => {
    return (
        <div>
            <div className='grap-header d-flex justify-content-between'>
                                <h6>Top Product</h6>
                                <div>
                                    <select >
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Yearly</option>
                                        <option>day</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="card-part">
                                        <div className='card-componet d-flex justify-content-between align-items-end'>
                                            <div className='d-flex align-items-center'> <p className='pero-icon'>#1</p> <div className='ms-2'> <p className='text-secondary'> Polo  shirt</p> <p> $2510 </p> </div> </div>
                                            <div><span className='cart-part-percentance'>3.32k</span></div>
                                        </div>
                                    </div>
                                    <div className="card-part">
                                        <div className='card-componet d-flex justify-content-between align-items-end'>
                                            <div className='d-flex align-items-center'> <p className='pero-icon'>#2</p> <div className='ms-2'> <p className='text-secondary'> Hondle  men</p> <p> $8510 </p> </div> </div>
                                            <div><span className='cart-part-percentance'>4.25k</span></div>
                                        </div>
                                    </div>
                                    <div className="card-part">
                                        <div className='card-componet d-flex justify-content-between align-items-end'>
                                            <div className='d-flex align-items-center'> <p className='pero-icon'>#3</p> <div className='ms-2'> <p className='text-secondary'> Red  Cap</p> <p> $3510 </p> </div> </div>
                                            <div><span className='cart-part-percentance'>5.32k</span></div>
                                        </div>
                                    </div>
                                    <div className="card-part">
                                        <div className='card-componet d-flex justify-content-between align-items-end'>
                                            <div className='d-flex align-items-center'> <p className='pero-icon'>#4</p> <div className='ms-2'> <p className='text-secondary'> Pocktet shirt</p> <p> $1510 </p> </div> </div>
                                            <div><span className='cart-part-percentance'>6.35k</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default Grap2Third;