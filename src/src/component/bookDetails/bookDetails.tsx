import {
  Avatar, AvatarShape, Button,
  ButtonDesign, FlexBox,
  FlexBoxDirection,
  Label,
  Text, Title,
  Toolbar,
  ToolbarDesign,
  ToolbarSpacer
} from "@ui5/webcomponents-react";
import React from "react";

interface BookDetailProps {
  slot?: any;
  handleClose: () => void;  
  data: any
}

export const BookDetail: React.FunctionComponent<BookDetailProps> = ({
  slot,
  handleClose,
  data
}) => {
  return (
    <div slot={slot} test-dataid="book-detail">
      <Toolbar design={ToolbarDesign.Solid} style={{ height: '5em' }}>
        <Title wrappingType="Normal" style={{ margin: 5 }}>{data.title}</Title>
        <ToolbarSpacer />
        <Button 
          icon="decline" 
          design={ButtonDesign.Transparent}
          onClick={() => handleClose()} 
        />
      </Toolbar>
      <Toolbar 
        style={{
          height: '200px'
        }}>
            <Avatar shape={AvatarShape.Square}>
              <img 
                src={'https://img.freepik.com/free-psd/mockup-half-open-book-standing-light-background_125540-1471.jpg?w=2000'} 
                style={{
                  width: '8em',
                  height: '6em',
                  marginLeft: '5em'
                }}
                alt="bookCover" 
                />
            </Avatar>
            <FlexBox 
              direction={FlexBoxDirection.Column} 
              style={{
                marginLeft: '6em'
              }}>
                <FlexBox>
                  <Label>Author:</Label>
                  <Text style={{
                      marginLeft: '2px'
                    }}>{data.author}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Categories:</Label>
                  <Text style={{
                    marginLeft: '2px'
                  }}>{data.categories}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Year:</Label>
                  <Text style={{
                    marginLeft: '2px'
                  }}>{data.year === '0' || '' ? 'NA' : data.year}</Text>
                </FlexBox>
            </FlexBox>
      </Toolbar>
    </div>
  );
};
