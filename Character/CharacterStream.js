const image = document.getElementById('Image_GitHub');

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
.then(url => image.src = url)
.catch(console.error);



const image = document.getElementById('Image_Covid19_1');

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
.then(url => image.src = url)
.catch(console.error);



const image = document.getElementById('Image_Covid19_2');

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
.then(url => image.src = url)
.catch(console.error);

const image = document.getElementById('Image_Covid19_3');

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
.then(url => image.src = url)
.catch(console.error);



const image = document.getElementById('Image_Character');

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
.then(url => image.src = url)
.catch(console.error);


const image = document.getElementById('Image_WireFrame');

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
.then(url => image.src = url)
.catch(console.error);




const image = document.getElementById('Image_StyleGuide');

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
.then(url => image.src = url)
.catch(console.error);




const image = document.getElementById('Image_CharacterDescription');

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
.then(url => image.src = url)
.catch(console.error);





const image = document.getElementById('Image_JavaScript');

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
.then(url => image.src = url)
.catch(console.error);




const image = document.getElementById('Image_Graham');

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
.then(url => image.src = url)
.catch(console.error);