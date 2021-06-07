import React, { useState, useEffect , useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useDropzone} from 'react-dropzone';
import { useHistory, useLocation } from "react-router-dom";


import { addProperty } from "../../actions/property";
import SweetAlert from 'react-bootstrap-sweetalert';
import swal from 'sweetalert';




const AddProperty = (props) => {

    const history = useHistory();

    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
      };
      
      const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box'
      };
      
      const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
      };
      
      const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
      };

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
      acceptedFiles.map(file =>{
        let data = new FormData();
        console.log(file);
            console.log(data)
      })
    console.log(images);
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);



    const  [propertytitle , setPropertyTitle] = useState('');
    const  [bedrooms , setBedrooms] = useState('');
    const  [description , setDescription] = useState('');
    const  [price , setPrice] = useState('');
    const  [surface , setSurface] = useState('');
    const  [address , setAddress] = useState('');
    const  [city , setCity] = useState('');
    const [images , setImages] = useState('');
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangePropertyTitle = (e) => {
        const propertytitle = e.target.value;
        setPropertyTitle(propertytitle);
      };
    
      const onChangeBedrooms = (e) => {
        const bedrooms = e.target.value;
        setBedrooms(bedrooms);
      };
    
      const onChangeDescription = (e) => {
        const description = e.target.value;
        setDescription(description);
      };
      const onChangePrice  = (e) => {
        const price  = e.target.value;
        setPrice(price );
      };
      const onChangeSurface   = (e) => {
        const surface   = e.target.value;
        setSurface(surface  );
      };
      const onChangeAddress  = (e) => {
        const address  = e.target.value;
        setAddress(address );
      };
      const onChangeCity  = (e) => {
        const city  = e.target.value;
        setCity(city );
      };
   const handleAddProperty = (e) => {
        e.preventDefault();
        dispatch(addProperty(propertytitle, bedrooms, city,address , surface ,price, description ))
        .then(() => {
          console.log('success');
          swal({
            title: "Done!",
            text: "user is added to database",
            icon: "success",
            timer: 2000,
            button: false
          })
          history.push('/')
        })
        .catch((e) => {
          console.log(e);
        });

    }

    return(
        <>
			<div class="page-title">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12">
							
							<h2 class="ipt-title">Submit Property</h2>
							<span class="ipn-subtitle">Just Submit Your Property</span>
							
						</div>
					</div>
				</div>
			</div>
            <section class="gray-simple">
			
            <div class="container">
                <div class="row">
                    
                    
                    <div class="col-lg-12 col-md-12">
                    
                        <div class="submit-page">
                            
                            <div class="form-submit">	
                                <h3>Basic Information</h3>
                                <div class="submit-section">
                                    <div class="row">
                                    
                                        <div class="form-group col-md-12">
                                            <label>Property Title<span class="tip-topdata" data-tip="Property Title"><i class="ti-help"></i></span></label>
                                            <input type="text" class="form-control" onChange={onChangePropertyTitle} name="propertytitle"/>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>Status</label>
                                            <select id="status" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">For Rent</option>
                                                <option value="2">For Sale</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>Property Type</label>
                                            <select id="ptypes" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">Houses</option>
                                                <option value="2">Apartment</option>
                                                <option value="3">Villas</option>
                                                <option value="4">Commercial</option>
                                                <option value="5">Offices</option>
                                                <option value="6">Garage</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>Price</label>
                                            <input type="text" class="form-control" onChange={onChangePrice} name="price" placeholder="USD"/>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>Area</label>
                                            <input type="text" class="form-control" onChange={onChangeSurface} name="surface"/>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>Bedrooms</label>
                                            <select name="bedrooms" onChange={onChangeBedrooms} id="bedrooms" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>Bathrooms</label>
                                            <select id="bathrooms" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-submit">	
                                <h3>Gallery</h3>
                                <div class="submit-section">
                                    <div class="row">
                                    
                                        {/* <div class="form-group col-md-12">
                                            <label>Upload Gallery</label>
                                            <form action="/upload-target" class="dropzone dz-clickable primary-dropzone">
                                                <div class="dz-default dz-message">
                                                    <i class="ti-gallery"></i>
                                                    <span>Drag and Drop To Change Logo</span>
                                                </div>
                                            </form>
                                        </div> */}

                                        <section className="container">
                                            <div {...getRootProps({className: 'dropzone'})}>
                                                <input {...getInputProps()} />
                                                <p>Drag 'n' drop some files here, or click to select files</p>
                                            </div>
                                            <aside style={thumbsContainer}>
                                                {thumbs}
                                            </aside>
                                            </section>


                                        
                                    </div>
                                </div>
                            </div>
                            <div class="form-submit">	
                                <h3>Location</h3>
                                <div class="submit-section">
                                    <div class="row">
                                    
                                        <div class="form-group col-md-6">
                                            <label>Address</label>
                                            <input type="text" onChange={onChangeAddress} name="address" class="form-control"/>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" name="city" onChange={onChangeCity} class="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-submit">	
                                <h3>Detailed Information</h3>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label>Description</label>
                                            <textarea name="description" onChange={onChangeDescription} class="form-control h-120"></textarea>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label>Building Age (optional)</label>
                                            <select id="bage" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">0 - 5 Years</option>
                                                <option value="2">0 - 10Years</option>
                                                <option value="3">0 - 15 Years</option>
                                                <option value="4">0 - 20 Years</option>
                                                <option value="5">20+ Years</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label>Garage (optional)</label>
                                            <select id="garage" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label>Rooms (optional)</label>
                                            <select id="rooms" class="form-control">
                                                <option value="">&nbsp;</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group col-md-12">
                                            <label>Other Features (optional)</label>
                                            <div class="o-features">
                                                <ul class="no-ul-list third-row">
                                                    <li>
                                                        <input id="a-1" class="checkbox-custom" name="a-1" type="checkbox"/>
                                                        <label for="a-1" class="checkbox-custom-label">Air Condition</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-2" class="checkbox-custom" name="a-2" type="checkbox"/>
                                                        <label for="a-2" class="checkbox-custom-label">Bedding</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-3" class="checkbox-custom" name="a-3" type="checkbox"/>
                                                        <label for="a-3" class="checkbox-custom-label">Heating</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-4" class="checkbox-custom" name="a-4" type="checkbox"/>
                                                        <label for="a-4" class="checkbox-custom-label">Internet</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-5" class="checkbox-custom" name="a-5" type="checkbox"/>
                                                        <label for="a-5" class="checkbox-custom-label">Microwave</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-6" class="checkbox-custom" name="a-6" type="checkbox"/>
                                                        <label for="a-6" class="checkbox-custom-label">Smoking Allow</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-7" class="checkbox-custom" name="a-7" type="checkbox"/>
                                                        <label for="a-7" class="checkbox-custom-label">Terrace</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-8" class="checkbox-custom" name="a-8" type="checkbox"/>
                                                        <label for="a-8" class="checkbox-custom-label">Balcony</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-9" class="checkbox-custom" name="a-9" type="checkbox"/>
                                                        <label for="a-9" class="checkbox-custom-label">Icon</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-10" class="checkbox-custom" name="a-10" type="checkbox"/>
                                                        <label for="a-10" class="checkbox-custom-label">Wi-Fi</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-11" class="checkbox-custom" name="a-11" type="checkbox"/>
                                                        <label for="a-11" class="checkbox-custom-label">Beach</label>
                                                    </li>
                                                    <li>
                                                        <input id="a-12" class="checkbox-custom" name="a-12" type="checkbox"/>
                                                        <label for="a-12" class="checkbox-custom-label">Parking</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="form-submit">	
                                <h3>Contact Information</h3>
                                <div class="submit-section">
                                    <div class="row">
                                    
                                        <div class="form-group col-md-4">
                                            <label>Name</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label>Email</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label>Phone (optional)</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group col-lg-12 col-md-12">
                                <label>GDPR Agreement *</label>
                                <ul class="no-ul-list">
                                    <li>
                                        <input id="aj-1" class="checkbox-custom" name="aj-1" type="checkbox"/>
                                        <label for="aj-1" class="checkbox-custom-label">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="form-group col-lg-12 col-md-12">
                                <button class="btn btn-theme-light-2 rounded" onClick={handleAddProperty} type="submit">Submit & Preview</button>
                            </div>
                                        
                        </div>
                    </div>
                    
                </div>
            </div>
                    
        </section>

        </>
    
    )
}
export default AddProperty;
