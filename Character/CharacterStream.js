const image1 = document.getElementById('Image_GitHub');

// Fetch the original image
fetch('../Character/Images/GitHub.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image1.src = url)
.catch(console.error);



 const image2 = document.getElementById('Image_Covid19_1');

// Fetch the original image
fetch('../Character/Images/Covid19.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image2.src = url)
.catch(console.error);



 const image3 = document.getElementById('Image_Covid19_2');

// Fetch the original image
fetch('../Character/Images/Covid19Week2.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image3.src = url)
.catch(console.error);

 const image4 = document.getElementById('Image_Covid19_3');

// Fetch the original image
fetch('../Character/Images/Covid19Week3.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image4.src = url)
.catch(console.error);



 const image5 = document.getElementById('Image_Character');

// Fetch the original image
fetch('../Character/Images/CharacterRationale.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image5.src = url)
.catch(console.error);


 const image6 = document.getElementById('Image_WireFrame');

// Fetch the original image
fetch('../Character/Images/WireFrame.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image6.src = url)
.catch(console.error);




 const image7 = document.getElementById('Image_StyleGuide');

// Fetch the original image
fetch('../Character/Images/ColourPallet.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image7.src = url)
.catch(console.error);




 const image8 = document.getElementById('Image_CharacterDescription');

// Fetch the original image
fetch('../Character/Images/CharacterDescription.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image8.src = url)
.catch(console.error);





 const image9 = document.getElementById('Image_JavaScript');

// Fetch the original image
fetch('../Character/Images/JavaScript.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image9.src = url)
.catch(console.error);




 const image10 = document.getElementById('Image_Graham');

// Fetch the original image
fetch('../Character/Images/ResearchPaper.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image10.src = url)
.catch(console.error);




const image11 = document.getElementById('Image_Stream');

// Fetch the original image
fetch('../Character/Images/Streaming.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image11.src = url)
.catch(console.error);


const image12 = document.getElementById('Image_Graham2');

// Fetch the original image
fetch('../Character/Images/Research-Papers.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image12.src = url)
.catch(console.error);



const image13 = document.getElementById('Image_Yamakado');

// Fetch the original image
fetch('../Character/Images/Yamakado.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image13.src = url)
.catch(console.error);