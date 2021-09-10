import React, {useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {
    AccountContainer,
    AccountBreak,
    AccountPane,
    AccountH1,
    AccountList,
    AccountItems,
    AccountTitle,
    AccountWrapper,
    AccountFrame,
    InfoP,
    InfoForm,
    InfoRadioList,
    InfoRadio,
    ToggleWrapper,
    ToggleInput,
    Slider,
    SelectedOption,
    ListOption   
}
from './accountElements'


export default function Account() {
    const {currentUser} = useAuth()
    const myAccounts = ['Profile','Subscription','Queue','History','My Library','Preferences']
    const [myProfile, setMyProfile] = useState('')

    //radio button
    const [size, setSize] = useState()

    //select option list
    const [listState, setListState] = useState('english')

    return (
        <>
            <AccountContainer>
                <AccountH1>My Account</AccountH1>
                <AccountPane>
                    {myAccounts.map(myAccount => (
                        <AccountList
                            key={myAccount}
                            onClick={() => setMyProfile(myAccount)}
                        >
                            {myAccount}
                        </AccountList>
                    ))}
                </AccountPane>
                <AccountPane>
                    <AccountItems>
                        <AccountBreak/>
                        {myProfile === 'Profile' && 
                            <>
                                <AccountWrapper>
                                <AccountTitle>My Information</AccountTitle>
                                    <AccountFrame>
                                        <InfoP>FirstName</InfoP>
                                        <InfoP></InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Last Name</InfoP>
                                        <InfoP></InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>EmailAddress</InfoP>
                                        <InfoP>{currentUser.email}</InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Password</InfoP>
                                        <InfoP>***********</InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Username</InfoP>
                                        <InfoP>{currentUser.email}</InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Gender</InfoP>
                                        <InfoP></InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Member Since</InfoP>
                                        <InfoP>7/2/2021</InfoP> 
                                    </AccountFrame>
                                </AccountWrapper>
                                <AccountBreak/>
                                <AccountTitle>Avatar</AccountTitle>
                            </>
                        }
                        {myProfile === 'Subscription' && (
                            <>
                                <AccountWrapper>
                                    <AccountTitle>Summary</AccountTitle>
                                    <AccountFrame>
                                        <InfoP>Plan</InfoP>
                                        <InfoP>Free</InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Status</InfoP>
                                        <InfoP>Active</InfoP> 
                                    </AccountFrame>
                                </AccountWrapper>
                            </>
                        )}
                        {myProfile === 'Queue' && (
                            <>
                                <AccountTitle>Queue</AccountTitle>
                            </>
                        )}
                        {myProfile === 'History' && (
                            <AccountTitle>History</AccountTitle>
                        )}
                        {myProfile === 'My Library' && (
                            <>
                                <AccountTitle>My Library</AccountTitle>
                                <AccountTitle>Digital Copy</AccountTitle>
                            </>
                        )}
                        {myProfile === 'Preferences' && (
                            <>
                                <AccountWrapper leftBgMobile>
                                    <AccountTitle>Video Settings</AccountTitle>
                                    <AccountFrame>
                                        <InfoP>Audio</InfoP>
                                        <InfoP>
                                            <SelectedOption
                                                value={listState}
                                                onChange={(e) => {
                                                    const selectedLanguage = e.target.value
                                                    setListState(selectedLanguage)
                                                }}
                                            >
                                                <ListOption value='english'>English</ListOption>
                                                <ListOption value='Japanese'>Japanese</ListOption>
                                                <ListOption value='Vietnamese'>Vietnamese</ListOption>
                                            </SelectedOption>
                                        </InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Autoplay</InfoP>
                                        <InfoP>
                                            <ToggleWrapper>
                                                <ToggleInput type='checkbox'/>
                                                <Slider/>
                                            </ToggleWrapper>
                                        </InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Restrict Mature Content</InfoP>
                                        <InfoP>
                                            <ToggleWrapper>
                                                <ToggleInput type='checkbox'/>
                                                <Slider/>
                                            </ToggleWrapper>
                                        </InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Close Caption</InfoP>
                                        <InfoP>
                                            <ToggleWrapper>
                                                <ToggleInput type='checkbox'/>
                                                <Slider/>
                                            </ToggleWrapper>
                                        </InfoP> 
                                    </AccountFrame>
                                </AccountWrapper>
                                <AccountBreak/>
                                <AccountWrapper leftBgMobile>
                                    <AccountTitle>Subtitle & Captioning Settings </AccountTitle>
                                    <AccountFrame>
                                        <InfoP>Font Size</InfoP>
                                        <InfoP>
                                            <InfoForm>
                                                <InfoRadioList>
                                                    <InfoRadio type='radio' checked={size === 'small'} onClick={() => setSize('small')}/>Small
                                                </InfoRadioList>
                                                <InfoRadioList>
                                                    <InfoRadio type='radio' checked={size === 'medium'} onClick={() => setSize('medium')}/>Medium(Default)
                                                </InfoRadioList>
                                                <InfoRadioList>
                                                    <InfoRadio type='radio' checked={size === 'large'} onClick={() => setSize('large')}/>Large
                                                </InfoRadioList>
                                            </InfoForm> 
                                        </InfoP>
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Font Color</InfoP>
                                        <InfoP>
                                            <SelectedOption   SelectedOption
                                                value={listState}
                                                onChange={(e) => {
                                                    const selectedColor = e.target.value
                                                    setListState(selectedColor)
                                                }}
                                            >
                                                <ListOption value='white'>White(Default)</ListOption>
                                                <ListOption value='black'>Black</ListOption>
                                                <ListOption value='red'>Red</ListOption>
                                                <ListOption value='green'>Green</ListOption>
                                                <ListOption value='pink'>Pink</ListOption>
                                                <ListOption value='lightBlue'>Light Blue</ListOption>
                                                <ListOption value='darkBlue'>Dark Blue</ListOption>
                                            </SelectedOption>
                                        </InfoP> 
                                    </AccountFrame>
                                    <AccountFrame>
                                        <InfoP>Background</InfoP>
                                        <InfoP>
                                            <SelectedOption
                                                value={listState}
                                                onChange={(e) => {
                                                    const selectedBackground = e.target.value
                                                    setListState(selectedBackground)
                                                }}
                                            >
                                                <ListOption value='whiteBg'>None/Transparent(Default)</ListOption>
                                                <ListOption value='blackBg'>Black</ListOption>
                                                <ListOption value='redBg'>Red</ListOption>
                                                <ListOption value='greenBg'>Green</ListOption>
                                                <ListOption value='pinkBg'>Pink</ListOption>
                                                <ListOption value='lightBlueBg'>Light Blue</ListOption>
                                                <ListOption value='darkBlueBg'>Dark Blue</ListOption>
                                            </SelectedOption>
                                        </InfoP> 
                                    </AccountFrame>
                                    
                                </AccountWrapper>
                            </>
                        )}
                    </AccountItems>
                </AccountPane>
            </AccountContainer>
        </>
    )
}