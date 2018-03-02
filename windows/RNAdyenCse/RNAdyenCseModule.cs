using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Adyen.Cse.RNAdyenCse
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNAdyenCseModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNAdyenCseModule"/>.
        /// </summary>
        internal RNAdyenCseModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNAdyenCse";
            }
        }
    }
}
